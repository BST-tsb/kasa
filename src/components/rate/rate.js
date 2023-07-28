
export default function Rate(data) {
    
    const score = data.score;
    const notes = [1, 2, 3, 4, 5];
    return (
      <div className="rate-contenair">
        {notes.map((note) =>
          score >= note ? (
            <i key={note} className="fa-solid fa-star grey"></i>
          ) : (
            <i key={note} className="fa-solid fa-star red"></i>
          )
        )}
      </div>
    );
}
