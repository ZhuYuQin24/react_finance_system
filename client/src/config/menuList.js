import ArrowRightIcon  from '@mui/icons-material/ArrowRight';

export const menuList = [
  {
    key: 'k-1',
    name: 'Key1',
    icon: <ArrowRightIcon/>,
    children: [
      {
        key: 'k-11',
        name: 'Key11',
        children: [
          {
            key: 'k-111',
            name: 'Key111',
            children: [
              {
                key: 'k-1111',
                name: 'Key111',
                path: '/key111'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    key: 'demo',
    name: 'Demo',
    icon: <ArrowRightIcon/>,
    path: '/demo'
  }
]
