const Visible = ({ when, otherwise = null, children }) => {
  return when ? children : otherwise;
};

export default Visible;
