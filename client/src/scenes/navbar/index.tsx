import { useState} from "react";
import { Link } from "react-router-dom";

//material组件
import { Box, Typography, useTheme, Avatar, Stack } from "@mui/material";
//自定义组件
import FlexBetween from "@/components/FlexBetween";
//图标
import BubbleChartIcon from "@mui/icons-material/BubbleChart";
import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// 颜色
// import { deepOrange, deepPurple } from "@mui/material/colors";

type Props = {};
const Navbar = (props: Props) => {
  const { palette:{grey} } = useTheme();
  // 仪表盘数据
  const [selected, setSelected] = useState("dashboard");
  return (
    <FlexBetween mb="0.25rem" p="0.5rem 0rem" color={grey[500]}>
      {/* logo */}
      <FlexBetween gap="0.75rem">
        <BubbleChartIcon sx={{ fontSize: "28px" }} />
      </FlexBetween>
      {/* 导航栏 */}
      <FlexBetween gap="0.75rem">
        <Stack direction="row" spacing={2}>
          <Avatar>
            <InsertInvitationIcon />
          </Avatar>
          <Avatar>
            <CircleNotificationsIcon />
          </Avatar>
          <Avatar>
            {/* 未登录 */}
            <AccountCircleIcon />
            {/* 登录 */}
            {/* hi */}
          </Avatar>
          <Avatar>
            <Brightness7Icon sx={{ fontSize: "1rem" }} />
          </Avatar>
        </Stack>
      </FlexBetween>
    </FlexBetween>
  );
};

export default Navbar;
