import FlexBetween from "@/components/FlexBetween";

import Sidebar from "@/scenes/content/sidebar";
import Routers from "@/scenes/content/routers";
type Props = {}
// 主内容
const Content = (props:Props) => {
  return (
    <FlexBetween>
      {/* 侧边栏 */}
      <Sidebar />
      {/* 路由展示区 */}
      <Routers />
    </FlexBetween>
  );
};

export default Content;
