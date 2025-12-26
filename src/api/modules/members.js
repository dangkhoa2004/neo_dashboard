import { request } from "@/utils/apiClient";

// Mock Data ban đầu
let users = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    email: "anv@example.com",
    plan: "Enterprise",
    role: "Admin",
    active: true,
    joinDate: "12/01/2024",
    avatar: "/author.avif",
  },
  {
    id: 2,
    name: "Trần Thị B",
    email: "btt@example.com",
    plan: "Basic",
    role: "User",
    active: true,
    joinDate: "15/02/2024",
    avatar: "/author.avif",
  },
  {
    id: 3,
    name: "Lê Văn C",
    email: "cle@example.com",
    plan: "Free",
    role: "User",
    active: false,
    joinDate: "20/02/2024",
    avatar: "/author.avif",
  },
  {
    id: 4,
    name: "Phạm D",
    email: "dpham@example.com",
    plan: "Pro",
    role: "Editor",
    active: true,
    joinDate: "22/02/2024",
    avatar: "/author.avif",
  },
  {
    id: 5,
    name: "Hoàng E",
    email: "ehoang@example.com",
    plan: "Pro",
    role: "User",
    active: true,
    joinDate: "25/02/2024",
    avatar: "/author.avif",
  },
  {
    id: 6,
    name: "Vũ F",
    email: "fvu@example.com",
    plan: "Free",
    role: "User",
    active: true,
    joinDate: "01/03/2024",
    avatar: "/author.avif",
  },
];

export default {
  getMembers() {
    return request([...users]);
  },

  createMember(member) {
    const newUser = {
      ...member,
      id: Date.now(),
      joinDate: new Date().toLocaleDateString("vi-VN"),
      avatar: `/author.avif`,
    };
    users.unshift(newUser); // Cập nhật mock data
    return request(newUser); // Trả về kết quả qua wrapper
  },

  updateMember(member) {
    const index = users.findIndex((u) => u.id === member.id);
    if (index !== -1) {
      users[index] = { ...users[index], ...member };
      return request(users[index]);
    }
    return Promise.reject("User not found");
  },

  deleteMember(id) {
    users = users.filter((u) => u.id !== id);
    return request(id);
  },

  bulkDeleteMembers(ids) {
    users = users.filter((u) => !ids.includes(u.id));
    return request(ids);
  },
};
