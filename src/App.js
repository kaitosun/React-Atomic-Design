import { Router } from "./router/Router";
import "./styles.css";

const user = {
  name: "じゃけぇ",
  image: "https://source.unsplash.com/G8cB8hY3yvU",
  email: "12345@example.com",
  phone: "090-1111-2222",
  company: {
    name: "テスト株式会社"
  },
  website: "http://google.com"
};

export default function App() {
  return <Router />;
}
