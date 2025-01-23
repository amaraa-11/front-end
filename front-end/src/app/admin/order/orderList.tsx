import { useState, useEffect } from "react";

type Users = {
  email: string;
  _id: number;
  password: number;
  quantity: number;
  phoneNumber: number;
  address: string;
  role: string;
  orderedFoods: number;
  ttl: string;
  isVerified: boolean;
  ingredients: string;
  price: number;
};

export default function OrderList() {
  const [status, setStatus] = useState("");
  const [borderColor, setBorderColor] = useState("border-yellow-500");
  const [user, setUser] = useState<Users[]>([]);

  async function fetchAll() {
    const res = await fetch(`http://localhost:4000/users`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    setUser(data);
  }

  useEffect(() => {
    fetchAll();
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
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
    <div>
      <div className="space-y-4">
        {user?.map((user) => (
          <div
            key={user._id}
            className="grid grid-cols-9 items-center gap-4 border border-gray-200 p-1 "
          >
            <input type="checkbox" className="col-span-1 w-4 h-4" />
            <span className="col-span-1 text-[#09090B]">{user.quantity}</span>
            <span className="col-span-2 text-[#71717A] truncate">
              {user.email}
            </span>
            <span className="col-span-1 text-[#71717A] ">
              {user.orderedFoods}
            </span>

            <span className="col-span-1  text-[#71717A]">
              {new Date(user.ttl).toLocaleDateString()}
            </span>

            <span className="col-span-1 text-[#71717A]">${user.price}</span>
            <span className="col-span-1 text-[#71717A]">{user.address}</span>

            <select
              value={status}
              onChange={handleChange}
              className={`font-[600] text-[12px] py-[6px] px-[10px] rounded-full w-[94px] border-2 ml-10 ${borderColor}`}
            >
              <option value="Pending">Pending</option>
              <option value="Delivered">Delivered</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
}
