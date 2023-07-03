import { TextWrap } from "../../../../Global/TextWrap/TextWrap";

export const BlockedUsers = () => {
  return (
    <div>
      <TextWrap>Blocked Users</TextWrap>
      <div className="mt-5 space-y-3">
        <div className="flex items-center space-x-3">
          <div>
            <div className="h-11 w-11 rounded-full  bg-black "></div>
          </div>
          <p className="font-semibold capitalize ">john doe</p>
        </div>
        <div className="flex items-center space-x-3">
          <div>
            <div className="h-11 w-11 rounded-full  bg-black "></div>
          </div>
          <p className="font-semibold capitalize ">john doe</p>
        </div>
        <div className="flex items-center space-x-3">
          <div>
            <div className="h-11 w-11 rounded-full  bg-black "></div>
          </div>
          <p className="font-semibold capitalize ">john doe</p>
        </div>
      </div>
    </div>
  );
};
