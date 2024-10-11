
import PropTypes from 'prop-types';

function StyleCard({ imageSrc, altText, title, description, buttonLabel, buttonClass }) {
  return (
    <div className="col-md-3 mb-5">
      <div className="card shadow-sm">
        <img src={imageSrc} className="card-img-top" alt={altText} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text text-muted">{description}</p>
          <a href="#" className={`btn ${buttonClass} btn-custom`}>
            {buttonLabel}
          </a>
        </div>
      </div>
    </div>
  );
}

StyleCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string.isRequired,
  buttonClass: PropTypes.string.isRequired,
};

export default StyleCard;
