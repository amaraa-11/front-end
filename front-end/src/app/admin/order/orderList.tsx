import { useState, useEffect } from "react";

type Users = {
  email: String;
  _id: Number;
  password: Number;
  phoneNumber: Number;
  address: String;
  role: String;
  orderedFoods: Number;
  ttl: Date;
  isVerified: Boolean;
  ingredients: String;
};

export default function OrderList() {
  const [status, setStatus] = useState("");
  const [borderColor, setBorderColor] = useState("");
  const [user, setUser] = useState<Users[]>();
  async function fetchAll() {
    const res = await fetch(`http://localhost:4000/users`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    OrderList(data);
  }

  useEffect(() => {
    fetchAll();
  }, []);

  const handleChange = (event: any) => {
    const selectedValue = event.target.value;
    setStatus(selectedValue);
    if (selectedValue === "Pending") {
      setBorderColor("border-yellow-500");
    } else if (selectedValue === "Delivered") {
      setBorderColor("border-green-500");
    } else if (selectedValue === "Cancelled") {
      setBorderColor("border-black");
    }
  };
  return (
    <div className="space-y-4">
      {user?.map((user) => (
        <div
          key={user._id}
          className="grid grid-cols-8 items-center gap-4 border border-gray-200 p-4 "
        >
          <input type="checkbox" className="col-span-1 w-4 h-4" />
          <span className="col-span-1 text-gray-600">{user.quantity}</span>
          <span className="col-span-2 text-gray-800 truncate">
            {user.email}
          </span>
          <span className="col-span-1 text-gray-600">{user.items}</span>
          <span className="col-span-1 text-gray-600">{user.date}</span>
          <span className="col-span-1 text-gray-800">{user.price}</span>
          <select
            value={status}
            onChange={handleChange}
            className={`font-[600] text-[12px] py-[6px] px-[10px] rounded-full w-[94px] border-2 ${borderColor}`}
          >
            <option value="Pending">Pending</option>
            <option value="Delivered">Delivered</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>
      ))}
    </div>
  );
}
