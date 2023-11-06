import { useContext } from "react";
import { FilterContext } from "../../../context/filterContext";

const Pagination = ({ info: { count, pages, next, prev } }) => {
  const { initialState, setInitialState } = useContext(FilterContext);

  return (
    <div className="flex flex-wrap justify-end gap-2 text-gray-950">
      <button
        className={`w-14 py-1 rounded ${prev ? "bg-white" : "bg-gray-500"}`}
        disabled={prev === null}
        onClick={() =>
          setInitialState({
            ...initialState,
            page: parseInt(new URL(prev).searchParams.get("page")),
          })
        }
      >
        prev
      </button>
      {pages < 4 ? (
        Array.from({ length: pages }, (_, i) => (
          <button
            className={`bg-white w-9 flex justify-center py-1 rounded ${
              i + 1 === initialState.page && "bg-white outline outline-gray-500"
            }`}
            key={i}
            onClick={() => setInitialState({ ...initialState, page: i + 1 })}
          >
            {i + 1}
          </button>
        ))
      ) : initialState.page === 1 ? (
        <>
          {Array.from({ length: 3 }, (_, i) => (
            <button
              className={`bg-white w-9 flex justify-center py-1 rounded ${
                i + 1 === initialState.page &&
                "bg-white outline outline-gray-500"
              }`}
              key={i}
              onClick={() => setInitialState({ ...initialState, page: i + 1 })}
            >
              {i + 1}
            </button>
          ))}
          <p className="text-white self-end">...</p>
          <button
            className={`bg-white w-9 flex justify-center py-1 rounded`}
            onClick={() => setInitialState({ ...initialState, page: pages })}
          >
            {pages}
          </button>
        </>
      ) : !(initialState.page >= pages - 1) ? (
        <>
          <button
            className={`bg-white w-9 flex justify-center py-1 rounded`}
            onClick={() =>
              setInitialState({ ...initialState, page: initialState.page - 1 })
            }
          >
            {initialState.page - 1}
          </button>
          <button
            className={`bg-white w-9 flex justify-center py-1 rounded outline outline-gray-500`}
            onClick={() =>
              setInitialState({ ...initialState, page: initialState.page })
            }
          >
            {initialState.page}
          </button>
          <button
            className={`bg-white w-9 flex justify-center py-1 rounded`}
            onClick={() =>
              setInitialState({ ...initialState, page: initialState.page + 1 })
            }
          >
            {initialState.page + 1}
          </button>
          <p className="text-white self-end">...</p>
          <button
            className={`bg-white w-9 flex justify-center py-1 rounded`}
            onClick={() => setInitialState({ ...initialState, page: pages })}
          >
            {pages}
          </button>
        </>
      ) : (
        <>
          <p className="text-white self-end">...</p>
          <button
            className={`bg-white w-9 flex justify-center py-1 rounded`}
            onClick={() =>
              setInitialState({ ...initialState, page: pages - 2 })
            }
          >
            {pages - 2}
          </button>
          <button
            className={`bg-white w-9 flex justify-center py-1 rounded ${
              initialState.page === pages - 1 && "outline outline-gray-500"
            }`}
            onClick={() =>
              setInitialState({ ...initialState, page: pages - 1 })
            }
          >
            {pages - 1}
          </button>
          <button
            className={`bg-white w-9 flex justify-center py-1 rounded ${
              initialState.page === pages && "outline outline-gray-500"
            }`}
            onClick={() => setInitialState({ ...initialState, page: pages })}
          >
            {pages}
          </button>
        </>
      )}
      <button
        className={`w-14 py-1 rounded ${next ? "bg-white" : "bg-gray-500"}`}
        disabled={next === null}
        onClick={() =>
          setInitialState({
            ...initialState,
            page: parseInt(new URL(next).searchParams.get("page")),
          })
        }
      >
        next
      </button>
    </div>
  );
};

export default Pagination;

// TODO: Cuando está al final de la páginación.
// solo si es igual o mayor a 41
// prev ... 40 41 42 next
