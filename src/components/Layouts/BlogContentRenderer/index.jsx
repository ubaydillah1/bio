const textBlocks = new Set(["paragraph", "text"]);

function getText(block) {
  return block.text || block.content || block.value || "";
}

function getItems(block) {
  return Array.isArray(block.items) ? block.items : [];
}

function renderInline(value) {
  if (Array.isArray(value)) {
    return value.map((item, index) => {
      if (typeof item === "string") return item;
      if (item?.type === "link") {
        return (
          <a
            key={index}
            href={item.href || item.url}
            target="_blank"
            rel="noreferrer"
            className="text-primary underline underline-offset-4"
          >
            {item.text || item.label || item.href || item.url}
          </a>
        );
      }
      return item?.text || "";
    });
  }

  return value;
}

export default function BlogContentRenderer({ blocks = [] }) {
  if (!Array.isArray(blocks) || blocks.length === 0) {
    return (
      <p className="text-base-content/70">
        This article does not have content yet.
      </p>
    );
  }

  return (
    <div className="space-y-8">
      {blocks.map((block, index) => {
        const type = block?.type || "paragraph";

        if (textBlocks.has(type)) {
          return (
            <p
              key={index}
              className="font-blog-serif text-[20px] leading-9 text-base-content/80"
            >
              {renderInline(getText(block))}
            </p>
          );
        }

        if (type === "heading") {
          const level = Math.min(Math.max(Number(block.level) || 2, 2), 3);
          const className = "font-semibold text-base-content";

          if (level === 3) {
            return (
              <h3 key={index} className={`font-blog-sans text-2xl ${className}`}>
                {getText(block)}
              </h3>
            );
          }

          return (
            <h2 key={index} className={`font-blog-sans text-3xl ${className}`}>
              {getText(block)}
            </h2>
          );
        }

        if (type === "image") {
          return (
            <figure key={index} className="space-y-3">
              <img
                src={block.src || block.url}
                alt={block.alt || ""}
                loading="lazy"
                decoding="async"
                className="w-full rounded-2xl object-cover bg-base-200"
              />
              {block.caption && (
                <figcaption className="text-sm text-base-content/55">
                  {block.caption}
                </figcaption>
              )}
            </figure>
          );
        }

        if (type === "gallery") {
          return (
            <div key={index} className="grid gap-4 sm:grid-cols-2">
              {getItems(block).map((item, itemIndex) => (
                <img
                  key={itemIndex}
                  src={item.src || item.url}
                  alt={item.alt || ""}
                  loading="lazy"
                  decoding="async"
                  className="aspect-video w-full rounded-xl object-cover bg-base-200"
                />
              ))}
            </div>
          );
        }

        if (type === "quote") {
          return (
            <blockquote
              key={index}
              className="font-blog-serif border-l-4 border-primary pl-5 text-2xl leading-9 text-base-content/80"
            >
              {getText(block)}
            </blockquote>
          );
        }

        if (type === "code") {
          return (
            <pre
              key={index}
              className="overflow-x-auto rounded-2xl bg-neutral p-5 text-sm text-neutral-content"
            >
              <code>{block.code || getText(block)}</code>
            </pre>
          );
        }

        if (type === "list") {
          const Tag = block.style === "ordered" ? "ol" : "ul";
          return (
            <Tag
              key={index}
              className={`font-blog-serif space-y-3 pl-6 text-[20px] leading-9 text-base-content/80 ${
                block.style === "ordered" ? "list-decimal" : "list-disc"
              }`}
            >
              {getItems(block).map((item, itemIndex) => (
                <li key={itemIndex}>{renderInline(item)}</li>
              ))}
            </Tag>
          );
        }

        if (type === "callout") {
          return (
            <div
              key={index}
              className="rounded-2xl border border-base-300 bg-base-200/70 p-5 text-base-content/75"
            >
              {block.title && (
                <p className="mb-2 font-semibold text-base-content">{block.title}</p>
              )}
              <p>{renderInline(getText(block))}</p>
            </div>
          );
        }

        if (type === "link") {
          return (
            <a
              key={index}
              href={block.href || block.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full border border-primary px-5 py-2 text-sm font-medium text-primary transition hover:bg-primary hover:text-primary-content"
            >
              {block.label || block.text || block.href || block.url}
            </a>
          );
        }

        return null;
      })}
    </div>
  );
}
