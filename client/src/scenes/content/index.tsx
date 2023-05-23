import FlexBetween from "@/components/FlexBetween";

import Sidebar from "@/scenes/content/sidebar";

type Props = {}
// 主内容
const Content = (props:Props) => {
  return (
    <FlexBetween>
      {/* 侧边栏 */}
      <Sidebar />
      {/* 路由展示区 */}
    </FlexBetween>
  );
};

export default Content;
