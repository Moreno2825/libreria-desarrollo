import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {
  AppBar,
  CustomTable,
  CustomThead,
  Icon,
  StyledDiv,
  Tab,
  Tabs,
} from "@/styles/userAdmin.style";
import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import UserRepo from "@/infraestructure/implementation/httpRequest/axios/UserRepo";
import GetAllUserUseCase from "@/application/usecases/userUseCase/GetAllUserUseCase";
import GetAllUserAccountUseCase from "@/application/usecases/userUseCase/GetAllUserAccountUseCase";
import { FaUser } from "react-icons/fa";
import axios from "axios";
import CollapsibleTable from "@/components/CollapsiTable";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

/// Para la actualizacion de roles
async function updateUserRole(userIdToUpdate, loggedInUserId) {
  try {
    const response = await axios.put(
      `http://localhost:3000/users/${userIdToUpdate}/updateRole`,
      {},
      {
        headers: {
          "Content-Type": "application/json",
          id_user: loggedInUserId,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

function UserIcon({ userId, refreshUsers, userRole }) {
  const [user, setUser] = useState(userId);
  const loggedInUserId = useSelector((state) => state.user._id);

  const handleIconClick = async () => {
    console.log("User ID:", userId);
    await updateUserRole(userId, loggedInUserId);
    await refreshUsers();
  };

  return (
    <Icon onClick={handleIconClick}>
      <FaUser />
    </Icon>
  );
}

UserIcon.propTypes = {
  userId: PropTypes.string.isRequired,
};

function Table({ users, refreshUsers, userRole }) {
  return (
    <div>
      <div>
        <div>Usuarios</div>
        <div>
          Obtenga una vista de los usuarios registrados en la plataforma de
          eBookCloud.{" "}
        </div>
      </div>
      <div>
        <CustomTable>
          <thead>
            <CustomThead>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Rol</th>
              {userRole === "SuperAdmin" && <th>Acciones</th>}
            </CustomThead>
          </thead>
          <tbody>
            {Array.isArray(users) &&
              users.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.rol}</td>
                  {userRole === "SuperAdmin" && (
                    <UserIcon userId={item.id} refreshUsers={refreshUsers} />
                  )}
                </tr>
              ))}
          </tbody>
        </CustomTable>
      </div>
    </div>
  );
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [users, setUsers] = useState([]);
  const userId = useSelector((state) => state.user._id);
  const userRole = useSelector((state) => state.user.rol);

  const refreshUsers = async () => {
    if (userRole === "SuperAdmin") {
      await fetchUsersAccount();
    } else if (userRole === "admin") {
      await fetchUsers();
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const userRepo = new UserRepo(null, userId);
  const userUseCase = new GetAllUserUseCase(userRepo);
  const userAccountUseCase = new GetAllUserAccountUseCase(userRepo);

  const fetchUsersAccount = async () => {
    try {
      const response = await userAccountUseCase.run();
      setUsers(response.users);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await userUseCase.run();
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (userRole === "SuperAdmin") {
      fetchUsersAccount();
    } else if (userRole === "admin") {
      fetchUsers();
    }
  }, [userRole]);

  return (
    <Box sx={{ bgcolor: "background.paper", width: 850 }}>
      <AppBar position="relative">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Compras" {...a11yProps(0)} />
          <Tab label="Usuarios" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <StyledDiv>
            <CollapsibleTable />
          </StyledDiv>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <StyledDiv>
            <Table
              users={users}
              refreshUsers={refreshUsers}
              userRole={userRole}
            />
          </StyledDiv>
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}
