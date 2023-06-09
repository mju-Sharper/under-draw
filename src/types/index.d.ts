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

interface bidErrMsg {
  event: string;
  data: {
    id: string;
    error: string;
  };
}

interface bidDataType {
  updatedAuction: {
    bid: number;
    bidder: string;
  };
  userInfo: {
    userId: string;
    isAdmin: boolean;
    enterTime: string;
  };
  sendTime: string; //귀찮아서 우선 이렇게했습니다..
}

interface bidTime {
  leftTime: number;
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

interface updatedAuction {
  bid: number;
  bidder: string;
}
