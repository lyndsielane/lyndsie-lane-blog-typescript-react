import "./Books.scss";
import ComingSoon from "public/images/ComingSoon.png";

function Books() {
  return (
    <div className="BooksItem">
      <div className="topRow">
        <div className="bookTitle">Field of Innocence</div>
        <div className="seriesTitle">The Euphoria Series</div>
        <div className="bookCover">
          <img src="ComingSoon"></img>
        </div>
        <div className="buyLink">COMING SOON</div>
      </div>
    </div>
  );
}

export default Books;
