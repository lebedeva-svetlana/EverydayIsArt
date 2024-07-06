import PropTypes from 'prop-types';

import ArtDescription from '../ArtDescription/ArtDescription.jsx';

import './ArtContent.scss';

function ArtContent({ artContent, isDescNeed }) {
    return (
        <div className="art">
            <img className="art-image" src={artContent.imageUrl} alt={artContent.title} />
            <div className="art-text">
                <h2 className="art-title">{artContent.title}</h2>
                <div className="art-description-group">
                    <p className="art-par art-date">{artContent.date}</p>
                </div>
                <div className="art-description-group">
                    {artContent.author && Object.keys(artContent.author).map(p => <p className="art-par" key={artContent.author[p]}>{artContent.author[p]}</p>)}
                </div>
                {isDescNeed && <>
                    <div className="art-description-group">
                        {artContent.placeOfOrigin && Object.keys(artContent.placeOfOrigin).map(p => <p className="art-par" key={artContent.placeOfOrigin[p]}>{artContent.placeOfOrigin[p]}</p>)}
                    </div>
                    <div className="art-description-group">
                        {artContent.medium && Object.keys(artContent.medium).map(p => <p className="art-par" key={artContent.medium[p]}>{artContent.medium[p]}</p>)}
                    </div>
                    <div className="art-description-group">
                        {artContent.accessNumber && <p className="art-par">{artContent.accessNumber}</p>}
                    </div>
                    <div className="art-description-group">
                        {artContent.wayToGet && Object.keys(artContent.wayToGet).map(p => <p className="art-par" key={artContent.wayToGet[p]}>{artContent.wayToGet[p]}</p>)}
                    </div>
                    {artContent.description && isDescNeed && <ArtDescription description={artContent.description}></ArtDescription>}
                </>}
                <p className="art-par art-source">
                    <a href={artContent.sourceUrl} className="a-base">{artContent.sourceUrlText}</a>
                </p>
            </div>
        </div>
    );
}

ArtContent.propTypes = {
    artContent: PropTypes.object,
    isDescNeed: PropTypes.bool
};

export default ArtContent;