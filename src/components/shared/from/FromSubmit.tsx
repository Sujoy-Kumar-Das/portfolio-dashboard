export default function FromSubmit({
  text,
  loading,
}: {
  text: string;
  loading?: boolean;
}) {
  return (
    <button className=" btn btn-primary w-full mt-3" type="submit">
      {loading ? <span className=" loading loading-spinner"></span> : `${text}`}
    </button>
  );
}
