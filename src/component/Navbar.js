import { Sidebar, Menu, MenuItem, useProSidebar, SubMenu } from "react-pro-sidebar";
import { GiHamburgerMenu } from 'react-icons/gi'
import { RxCross1 } from 'react-icons/rx'
import { item } from '../json/nav'
import {AiFillHome,AiFillHeart,AiFillDatabase} from 'react-icons/ai'

function Navbar() {
  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } = useProSidebar();

  return (
    <div id="app" style={({ height: "100vh" }, { display: "flex" })}>
      <Sidebar breakPoint="sm" style={{ height: "100vh" }}>
        <Menu >
          <div style={{
            display: 'flex',
            justifyContent: 'right',
            padding: '20px'
          }}>
            {collapsed ? <GiHamburgerMenu
              style={{
                fontSize: "20px",
                cursor: 'pointer'
              }}
              onClick={() => {
                collapseSidebar();
              }}

            /> :
              <RxCross1 style={{

                fontSize: "20px",

              }}
                onClick={() => {
                  collapseSidebar();
                }}></RxCross1>
            }
          </div>

          <h2>Admin</h2>

          {item.map((item, index) => {
            if (item.type === 2)
              return (
                <SubMenu label={item.label}>
                  {item.dropdown.map((item2, index) => (
                    <MenuItem key={index} >
                      {item2.icon}
                      {item2.label}
                    </MenuItem>
                  ))}
                </SubMenu>)


            if (item.type === 1)
              return (<MenuItem key={index}>{item.label}</MenuItem>)
            return 0;
          })}

        </Menu>
      </Sidebar>
    </div>
  );
}

export default Navbar;
