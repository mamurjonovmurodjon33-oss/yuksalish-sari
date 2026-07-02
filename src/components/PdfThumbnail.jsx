import { useEffect, useRef, useState } from "react";
import * as pdfjsLib from "pdfjs-dist";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.min.mjs?url";

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

function encodePdfUrl(url) {
  return url
    .split("/")
    .map((part, index) => (index === 0 && part === "" ? "" : encodeURIComponent(part)))
    .join("/");
}

export default function PdfThumbnail({ pdfUrl, alt }) {
  const canvasRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    const renderThumbnail = async () => {
      try {
        const pdf = await pdfjsLib.getDocument(encodePdfUrl(pdfUrl)).promise;
        const page = await pdf.getPage(1);
        const canvas = canvasRef.current;

        if (!canvas || cancelled) return;

        const containerWidth = canvas.parentElement?.clientWidth || 280;
        const viewport = page.getViewport({ scale: 1 });
        const scale = containerWidth / viewport.width;
        const scaledViewport = page.getViewport({ scale });

        canvas.width = scaledViewport.width;
        canvas.height = scaledViewport.height;

        await page.render({
          canvas,
          canvasContext: canvas.getContext("2d"),
          viewport: scaledViewport,
        }).promise;

        if (!cancelled) setLoading(false);
      } catch {
        if (!cancelled) setLoading(false);
      }
    };

    renderThumbnail();

    return () => {
      cancelled = true;
    };
  }, [pdfUrl]);

  return (
    <div className="pdf-thumbnail">
      {loading && <div className="pdf-thumbnail-placeholder" />}
      <canvas ref={canvasRef} aria-label={alt} />
    </div>
  );
}
