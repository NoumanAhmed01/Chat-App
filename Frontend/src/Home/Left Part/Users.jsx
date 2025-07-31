import User from "./User";

const Users = () => {
  return (
    <div>
      <h1 className="px-8 py-2 text-white font-semibold bg-slate-800 rounded-md">
        Message
      </h1>
      <div
        className="py-2  overflow-y-auto"
        style={{
          maxHeight: "calc(84vh - 10vh)",
          scrollbarWidth: "none" /* Firefox */,
        }}
      >
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
      </div>
    </div>
  );
};

export default Users;
