// 임시 타입
interface productCategoryProps {
  id?: string;
  productTitle?: string;
  name?: string;
  startingBid?: number;
  imageUrl?: string;
  auctionTime?: string;
  category?: string;
}

interface socketUserList {
  connectedUsers: socketUserListType[];
}

interface socketUserListType {
  userId: string;
  isAdmin: boolean;
}

interface socketChatMsg {
  message: { message: string };
  userInfo: {
    userId: string;
    isAdmin: boolean;
  };
}

interface ChatMsg {
  username: string;
  message: string;
  admin?: boolean;
}

interface User {
  userId: string;
  isAdmin: boolean;
}
