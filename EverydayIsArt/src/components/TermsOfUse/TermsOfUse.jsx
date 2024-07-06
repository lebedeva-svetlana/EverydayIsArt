import TermsOfUsePart from './TermsOfUsePart/TermsOfUsePart.jsx';

import './TermsOfUse.scss';

function TermsOfUse() {
    return (
        <div className="terms">
            <ol className="terms-ol">
                <TermsOfUsePart url="https://www.tretyakovgallery.ru/about/copirith/" urlTitle="Terms of use" orgName="The State Tretyakov Gallery"></TermsOfUsePart>
                <TermsOfUsePart url="https://www.vam.ac.uk/info/va-websites-terms-conditions" urlTitle="V&A websites terms and conditions" orgName="The Victoria and Albert Museum"></TermsOfUsePart>
                <TermsOfUsePart url="https://www.metmuseum.org/policies/terms-and-conditions" urlTitle="Terms and Conditions / Terms of Use" orgName="The Metropolitan Museum of Art"></TermsOfUsePart>
            </ol>
        </div>
    );
}

export default TermsOfUse;