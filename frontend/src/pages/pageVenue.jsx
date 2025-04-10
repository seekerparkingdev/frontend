import MovistarBanner from "../components/MovistarBanner";
import SearchVenue from "../components/SearchVenue";
import EventNewSecundario from "../components/EventNewSecundario";
import EventProxSecundario from "../components/EventProxSecundario";

const pageVenue = () => {
    return (
        <>
            <MovistarBanner />
            <SearchVenue/>
            <EventNewSecundario/>
            <EventProxSecundario/>
           
        </>
    );
}

export default pageVenue;
