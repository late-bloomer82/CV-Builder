import zoeIcon from "../../assets/zoe-icon.jpg";
function OptionSection() {
  return (
    <div className="nav-wrapper">
      <a href="https://www.youtube.com/watch?v=PyTF_0ig6fE" target="_blank">
        <img className="zoe" src={zoeIcon} alt="Zoe Icon" />
      </a>

      <h4 className="cv-header">MY CV</h4>
    </div>
  );
}

export default OptionSection;
