export const metadata = {
  title: "News Todayy App",
  description: "Auth Page",
};

export default function Layout({ children }) {
  return (
    <div className="authPage">
      {children}
    </div>
  );
}
