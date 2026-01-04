import { request } from "@/utils/apiClient";

// --- MOCK DATA (Dữ liệu giả lập đầy đủ) ---

// 1. Dữ liệu Giỏ hàng (Cart) - Dùng let để có thể thay đổi (thêm/xóa)
let cartItems = [
  {
    id: 1,
    title: "VueJS Master Class",
    price: 1200000,
    image: "/images/vue.avif",
  },
  {
    id: 2,
    title: "Ebook UI/UX Design",
    price: 150000,
    image: "/images/ui-ux.avif",
  },
];

// 2. Dữ liệu Khóa học (Courses)
const courses = [
  {
    id: 1,
    title: "VueJS Master Class",
    desc: "Từ Zero đến Hero với Vue 3 Composition API.",
    instructor: "Hoàng Long",
    price: 1200000,
    rating: 4.9,
    tag: "Frontend",
    color: "bg-green-400",
    image: "/images/vue.avif",
  },
  {
    id: 2,
    title: "UI/UX Tư Duy Thiết Kế",
    desc: "Làm chủ Figma và tư duy sản phẩm.",
    instructor: "Tuấn Vũ",
    price: 890000,
    rating: 4.8,
    tag: "UI/UX",
    color: "bg-yellow-400",
    image: "/images/ui-ux.avif",
  },
  {
    id: 3,
    title: "NodeJS & Express",
    desc: "Xây dựng RESTful API chuẩn chỉnh.",
    instructor: "Đức Minh",
    price: 1500000,
    rating: 4.7,
    tag: "Backend",
    color: "bg-purple-400",
    image: "/images/NodeJS-Express.avif",
  },
  {
    id: 4,
    title: "DevOps Cơ Bản",
    desc: "Docker, CI/CD và triển khai thực tế.",
    instructor: "Admin Team",
    price: 2000000,
    rating: 5.0,
    tag: "DevOps",
    color: "bg-pink-400",
    image: "/images/DevOps.avif",
  },
  {
    id: 5,
    title: "ReactJS Pro",
    desc: "NextJS, Redux Toolkit tối ưu.",
    instructor: "Linh Chi",
    price: 1300000,
    rating: 4.6,
    tag: "Frontend",
    color: "bg-blue-400",
    image: "/images/ReactJS.avif",
  },
  {
    id: 6,
    title: "Python Automation",
    desc: "Tự động hóa công việc văn phòng.",
    instructor: "Dangkhoa",
    price: 990000,
    rating: 4.9,
    tag: "Backend",
    color: "bg-orange-400",
    image: "/images/Python.avif",
  },
];

// 3. Dữ liệu Gói dịch vụ (Pricing Plans)
const pricingPlans = [
  {
    name: "Starter",
    price: "0",
    period: "/tháng",
    desc: "Cho người mới bắt đầu.",
    features: ["5 khóa miễn phí", "Cộng đồng Discord"],
    bg: "bg-white",
    btn: "bg-white text-black",
  },
  {
    name: "Pro Member",
    price: "299k",
    period: "/tháng",
    desc: "Truy cập không giới hạn.",
    features: ["Full khóa học", "Source code dự án", "Mentor 1-1"],
    bg: "bg-[#FFD700]",
    btn: "bg-black text-white",
    recommended: true,
  },
  {
    name: "Lifetime",
    price: "5tr",
    period: "/trọn đời",
    desc: "Thanh toán 1 lần.",
    features: [
      "Quyền lợi Pro trọn đời",
      "Áo thun & Sticker",
      "Hỗ trợ việc làm",
    ],
    bg: "bg-white",
    btn: "bg-white text-black",
  },
];

// 4. Dữ liệu FAQ
const faqs = [
  {
    q: "Chưa biết gì về code học được không?",
    a: "Được! Lộ trình Zero-to-Hero thiết kế riêng cho người trái ngành.",
  },
  {
    q: "Thời gian học như thế nào?",
    a: "Tự do (Self-paced). Video 4K quay sẵn, học mọi lúc mọi nơi.",
  },
  {
    q: "Có chứng chỉ không?",
    a: "Có. Chứng chỉ Online xịn xò thêm được vào LinkedIn.",
  },
  {
    q: "Hoàn tiền không?",
    a: "7 ngày hoàn tiền 100% không cần lý do.",
  },
];

// --- SERVICE EXPORT ---

export default {
  // --- Nhóm hàm lấy dữ liệu hiển thị (Read) ---

  // Lấy danh sách khóa học (có hỗ trợ lọc giả lập)
  getCourses(category = "Tất cả") {
    if (!category || category === "Tất cả") {
      return request([...courses]);
    }
    const filtered = courses.filter((c) => c.tag === category);
    return request(filtered);
  },

  // Lấy danh sách Pricing
  getPricingPlans() {
    return request([...pricingPlans]);
  },

  // Lấy danh sách FAQ
  getFaqs() {
    return request([...faqs]);
  },

  // Lấy toàn bộ dữ liệu trang chủ (Dùng để init store)
  getAllHomeData() {
    return request({
      courses: [...courses],
      pricingPlans: [...pricingPlans],
      faqs: [...faqs],
    });
  },

  // --- Nhóm hàm thao tác Giỏ hàng (Cart Logic) ---

  // Lấy giỏ hàng hiện tại
  getCart() {
    return request([...cartItems]);
  },

  // Thêm vào giỏ hàng
  addToCart(course) {
    const exists = cartItems.find((i) => i.id === course.id);
    if (!exists) {
      // Clone object để tránh tham chiếu
      const newItem = { ...course };
      cartItems.push(newItem);
      return request(newItem);
    }
    // Trường hợp đã tồn tại, trả về item cũ
    return request(exists);
  },

  // Xóa khỏi giỏ hàng
  removeFromCart(id) {
    cartItems = cartItems.filter((item) => item.id !== id);
    return request(id);
  },
};
