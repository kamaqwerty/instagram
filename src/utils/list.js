import { AiFillHome , AiOutlineSearch , AiOutlineHeart } from "react-icons/ai" 
import { BsCameraReels } from "react-icons/bs"
import { FiEdit3 } from "react-icons/fi"
import { RxHamburgerMenu } from "react-icons/rx"

export const SidebarList = [ 
  {
    id:1,
    caption: "Главное",
    icon: AiFillHome
  },
  {
    id:2,
    caption: "Поисковый запрос",
    icon: AiOutlineSearch
  },
  {
    id:3,
    caption: "Reels",
    icon: BsCameraReels
  },
  {
    id:4,
    caption: "Уведомления",
    icon: AiOutlineHeart
  },
  {
    id:5,
    caption: "Уведомления",
    icon: FiEdit3
  },
  {
    id:6,
    caption: "Еще",
    icon: RxHamburgerMenu
  },
]