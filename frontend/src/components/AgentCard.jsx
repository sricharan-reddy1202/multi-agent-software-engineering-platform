function AgentCard({
  title,
  content,
}) {

  return (

    <div
      className="
      border
      rounded-lg
      p-4
      shadow-sm
      "
    >

      <h3
        className="
        text-lg
        font-semibold
        mb-3
        "
      >
        {title}
      </h3>

      <pre
        className="
        whitespace-pre-wrap
        text-sm
        "
      >
        {content}
      </pre>

    </div>

  );
}

export default AgentCard;