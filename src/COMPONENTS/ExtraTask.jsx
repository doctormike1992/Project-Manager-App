/* eslint-disable react/prop-types */

export default function ExtraTask({ addTask }) {
  return (
    <>
      <button
        className="bg-stone-700 text-stone-200 rounded-sm p-1 hover:bg-stone-500 hover:text-stone-50 active:bg-stone-400"
        onClick={addTask}
      >
        New Task
      </button>
    </>
  );
}
