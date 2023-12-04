import React from "react";
import SideBar from "../components/sidebar/SideBar";
import ConversationList from "./components/ConversationList";
import getConversations from "../actions/getConversations";
import getUsers from "../actions/getUsers";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const conversations = await getConversations();
  const users = await getUsers();

  return (
    <SideBar>
      <div className="h-full">
        {" "}
        <ConversationList users={users} initialItems={conversations} />
        {children}
      </div>
    </SideBar>
  );
}
