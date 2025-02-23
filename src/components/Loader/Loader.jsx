import PropagateLoader from "react-spinners/PropagateLoader";

const loaderCssOverride = {
  textAlign: "center",
  padding: "60px 0",
};

function Loader({ isLoading }) {
  return (
    <PropagateLoader
      loading={isLoading}
      color="#6f85d6"
      cssOverride={loaderCssOverride}
    />
  );
}

export default Loader;
