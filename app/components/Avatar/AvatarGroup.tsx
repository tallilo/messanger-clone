"use client";
import { User } from "@prisma/client";
import React from "react";
import Image from "next/image";
interface AvatarGroupProprs {
  users?: User[];
}
export default function AvatarGroup({ users = [] }: AvatarGroupProprs) {
  const slicedUsers = users.slice(0, 3);

  const positionMap = {
    0: "top-0 left-[12px]",
    1: "bottom-0",
    2: "bottom-0 right-0",
  };
  return (
    <div className="relative h-11 w-11">
      {slicedUsers.map((user, i) => (
        <div
          className={`absolute inline-block rounded-full overflow-hidden h-[21px] w-[21px] ${
            positionMap[i as keyof typeof positionMap]
          }`}
          key={user.id}
        >
          <Image
            alt="Avatar"
            fill
            src={user?.image || "/images/placeholder.jpg"}
          />
        </div>
      ))}
    </div>
  );
}
