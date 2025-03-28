export default function Page() {
  /* Settings-Page (does not have specific functions) */
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight p-4">
        Application Settings
      </h1>
      <label className="ml-4 inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
        />
        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
        <span className="ms-3 text-sm font-medium text-gray-900">
          Do nothing
        </span>
      </label>
    </div>
  );
}
