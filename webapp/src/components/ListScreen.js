import React, { useState, useEffect } from "react";
import User from "./User.js";
import Button from "@mui/material/Button";


// import {Outlet, Link, useParams} from "react-router-dom";


import { Outlet, Link, useOutletContext } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Modal from "@mui/material/Modal";
import UpdateForm from "./UpdateForm";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};





function ListScreen() {
  const { buyerId } = useOutletContext();
  const [selectedBuyer] = buyerId;
  const [users, setUsers] = useState({});
  const [familyPlan, setfamilyPlan] = useState({});
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [isSeller, setIsSeller] = useState(false);

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const findUserById = async () =>
    await fetch(`http://localhost:8080/user/findByIdBuyer/` + selectedBuyer)
      .then((response) => response.json())
      .then((user) => setUsers(user));

  const findOrderByUserId = () =>
    fetch(`http://localhost:8080/order/findOrdersByUserId/` + selectedBuyer)
      .then((response) => response.json())
      .then((orders) => setOrders(orders));

  const findAllProduct = () =>
    fetch(`http://localhost:8080/product/findAll`)
      .then((response) => response.json())
      .then((products) => setProducts(products));

  const findCurrentFamilyPlan = async () =>
    await fetch(
      `http://localhost:8080/familyPlan/findByUserId/${selectedBuyer}`
    )
      .then((response) => response.json())
      .then((plan) => {
        // console.log(plan);
        setfamilyPlan(plan);
      });

  const userHandler = (data) => {
    setUsers(data);
  };
  const orderHandler = (data) => {
    setOrders((state) => [...state, data]);
  };
  const orderUpdateHandler = (data) => {
    // console.log("ORDER DATA: " + JSON.stringify(data));
    const updatedData = orders.map((order) => {
      if (order.orderId === data.orderId) {
        return data;
      } else return order;
    });
    console.log("UPDATE ORDER DATA: " + JSON.stringify(updatedData));
    setOrders(updatedData);
  };

  const productHandler = (data) => {
    console.log("Product DATA: " + JSON.stringify(data));
    setProducts((state) => [...state, data]);
  };

  const productUpdateHandler = (data) => {
    // console.log("ORDER DATA: " + JSON.stringify(data));
    const updatedData = products.map((product) => {
      if (product.productId === product.productId) {
        return data;
      } else return product;
    });
    console.log("UPDATE PRODUCT DATA: " + JSON.stringify(updatedData));
    setProducts(updatedData);
  };

  const productDeleteHandler = (id) => {
    const updatedData = products.filter((product) => {
      return product.productId !== id;
    });
    setProducts(updatedData);
  };

  useEffect(() => {
    findUserById();
    findOrderByUserId();
    findAllProduct();
    findCurrentFamilyPlan();
  }, []);

  return (
    <div class="main-screen">
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Link to="/">
              <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
              >
                YaMaZon
              </Typography>
            </Link>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Link to="product">
                <Button sx={{ my: 2, color: "white", display: "block" }}>
                  Product
                </Button>
              </Link>
              <Link to="order">
                <Button sx={{ my: 2, color: "white", display: "block" }}>
                  Order
                </Button>
              </Link>
              {/* <Link to="familyplan">
                <Button>Family Plan</Button>
              </Link> */}
            </Box>
            <Box sx={{ flexGrow: 0, padding: "15px" }}>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Hi, {users.firstName} {users.lastName}
              </Typography>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem key="update_info" onClick={handleOpen}>
                  <Typography textAlign="center">Update Info</Typography>
                </MenuItem>
                <MenuItem key="delete_me" onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Delete Me</Typography>
                </MenuItem>
                {/* {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))} */}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <UpdateForm
            user={users}
            handleClose={handleClose}
            userHandler={userHandler}
          ></UpdateForm>
        </Box>
      </Modal>
      {/* <User
        user={users}
        familyPlan={familyPlan}
        userHandler={userHandler}
      ></User> */}

      <Outlet
        context={{
          order: [orders, setOrders],
          orderHelper: [orderHandler],
          orderUpdateHelper: [orderUpdateHandler],
          product: [products, setProducts],
          productHelper: [productHandler],
          productUpdateHelper: [productUpdateHandler],
          productDeleteHelper: [productDeleteHandler],
          seller: [isSeller, setIsSeller],
          user: [users, setUsers],
        }}
      />
    </div>
  );
}

export default ListScreen;
