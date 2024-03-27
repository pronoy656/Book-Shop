import { saveReadBooks } from "../../Utility/localStorage";

const ReadBooks = () => {
  return (
    <div>
      <h1>Ami read books</h1>
      {saveReadBooks()}
    </div>
  );
};

export default ReadBooks;
