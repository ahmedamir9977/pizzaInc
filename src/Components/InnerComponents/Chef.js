const Chef = ({ chefKey, chefImg, chefName, chefRole, chefQuote }) => {
  return (
    <div className="chef mt-5 w-75 d-flex flex-column justify-content-center align-items-center">
      <div className="chef-img-container  d-flex flex-column justify-content-center align-items-center">
        <img src={chefImg} className="img-fluid" alt={chefKey} />
      </div>
      <div className="chef-description w-100  d-flex flex-column justify-content-center align-items-center">
        <span className="chef-name py-1 text-center">{chefName}</span>
        <span className="chef-role py-1 text-center">{chefRole}</span>
        <span className="chef-quote py-2 text-center">{chefQuote}</span>
      </div>
    </div>
  );
};
export default Chef;
