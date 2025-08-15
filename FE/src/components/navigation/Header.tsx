import { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import { Drawer, Menu, Button } from "antd";
import { Link } from "react-router";

export default function Header() {
  const [open, setOpen] = useState(false);

  const showDrawer = () => setOpen(true);
  const onClose = () => setOpen(false);

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "General", path: "/news/category/general" },
    { label: "Business", path: "/news/category/business" },
    { label: "Entertainment", path: "/news/category/entertainment" },
    { label: "Health", path: "/news/category/health" },
    { label: "Science", path: "/news/category/science" },
    { label: "Sport", path: "/news/category/sport" },
    { label: "Technology", path: "/news/category/technology" },
  ];

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-white shadow-md h-[80px] text-[#7f1d1d]">
        <div className="container mx-auto flex items-center justify-between h-full px-5">
          <h1 className="text-xl font-bold">TNews</h1>

          {/* Desktop Menu */}
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              {menuItems.map((item) => (
                <li key={item.path}>
                  <Link to={item.path}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Burger */}
          <div className="md:hidden">
            <Button
              type="text"
              icon={<MenuOutlined />}
              onClick={showDrawer}
            />
          </div>
        </div>
      </div>

      {/* Drawer Menu */}
      <Drawer
        placement="right"
        onClose={onClose}
        open={open}
      >
        <Menu mode="vertical" onClick={onClose}>
          {menuItems.map((item) => (
            <Menu.Item key={item.path}>
              <Link to={item.path}>{item.label}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Drawer>
    </header>
  );
}
