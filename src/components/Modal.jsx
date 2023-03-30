import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { modalActions } from "@/store/modal";

const Modal = ({ data }) => {
  const [state, setState] = useState(1);
  const isOpen = useSelector((state) => state.modal.show);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(modalActions.showModal({ type: "CLOSE_MODAL" }));
    setState(1);
  };

  const handleForm = () => {
    setState(2);
  };

  const handleThanks = () => {
    setState(3);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let genre = event.target[0].value;
    const formData = new FormData();
    formData.append("genre", genre);
    fetch("http://localhost:5001/insert", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        handleThanks();
      })
      .catch((error) => console.error(error));
  };

  const modalContent = (a) => {
    switch (a) {
      case 2:
        return (
          <form className="bg-black p-4 rounded-lg" onSubmit={handleSubmit}>
            <label
              className="block text-white font-bold mb-2"
              for="music_genre"
            >
              Select the genre that you think it has:
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-900 border border-gray-900 text-white py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-gray-900 focus:border-gray-900"
                name="music_genre"
                id="music_genre"
              >
                <option value="reggae">Reggae</option>
                <option value="disco">Disco</option>
                <option value="metal">Metal</option>
                <option value="classical">Classical</option>
                <option value="rock">Rock</option>
                <option value="pop">Pop</option>
                <option value="jazz">Jazz</option>
                <option value="country">Country</option>
                <option value="blues">Blues</option>
                <option value="hiphop">Hip Hop</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M14.707 7.293a1 1 0 0 0-1.414 0L10 10.586l-3.293-3.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0 0-1.414z" />
                </svg>
              </div>
            </div>
            <button
              className="mt-10 bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Send It
            </button>
          </form>
        );
        break;
      case 3:
        return <h1 className="text-white my-10">Thanks for your feedback!</h1>;
      default:
        return (
          <>
            <div className="mt-4 text-white text-center">
              Genre: {data.data}
            </div>
            <h3 className="text-white">Was that classification Correct?</h3>
            <div class="space-x-4n my-10">
              <button
                onClick={handleThanks}
                class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Yes
              </button>
              <button
                onClick={handleForm}
                class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-500 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
              >
                No
              </button>
            </div>
          </>
        );
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>

            <div
              className="inline-block text-center align-bottom bg-black rounded-lg overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div className="bg-black px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <h3
                  className="text-2xl text-start leading-6 font-bold text-white"
                  id="modal-headline"
                >
                  Classification
                </h3>
              </div>

              {modalContent(state)}

              <div className="border-t-[1px] border-[#606060] justify-between bg-black px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={handleClick}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
