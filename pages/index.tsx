import Toast from "../components/toast";
import { useToastStore } from "../store/toast-store";

const HomePage = () => {
  const { toast, closeToast } = useToastStore();
  return (
    <div className="flex justify-center items-center h-screen">
      <Toast />
      <div className="flex gap-4">
        <button
          className="bg-green-500 px-1 py-2 rounded"
          onClick={() =>
            toast.success("Success message", "topCenter", "fadeUp")
          }
        >
          success button
        </button>
        <button
          className="bg-red-500 px-1 py-2 rounded"
          onClick={() => toast.error("Error message", "topRight", "fadeLeft")}
        >
          error button
        </button>
        <button
          className="bg-yellow-500 px-1 py-2 rounded"
          onClick={() =>
            toast.warning("Warning message", "bottomCenter", "fadeUp")
          }
        >
          warning button
        </button>
        <button className="bg-cyan-500 px-1 py-2 rounded" onClick={closeToast}>
          close
        </button>
      </div>
    </div>
  );
};

export default HomePage;
