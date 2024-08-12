export default function Blog({ params }) {
    const { id } = params;
  return (
    <main>
      <div> 
         {id}
      </div>
    </main>
  );
}