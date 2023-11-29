import "./Books.scss";
import comingSoon from "../../assets/images/ComingSoon.png";

function Books() {
  return (
    <div>
      <div className="BooksItem">
        <div className="stillYours">
          <div className="bookTitle">I'm Still Yours</div>
          <div className="seriesTitle">
            Hope Rises from<br></br> the Ashes of Darkness
          </div>
          <div className="bookCover">
            <img src={comingSoon} alt="book cover" />
          </div>
          <div className="buyLink">COMING SOON</div>
        </div>
      </div>
    </div>
  );
}

export default Books;
