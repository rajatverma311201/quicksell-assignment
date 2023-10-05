import { useEffect, useRef } from "react";

type Handler = () => void;
export default function useOutsideClick(
    handler: Handler,
    listenCapturing = true
) {
    const ref = useRef<HTMLFormElement | null>(null);

    useEffect(
        function () {
            function handleClick(e: MouseEvent) {
                console.log("handleClick", {
                    etar: e.target,
                    ref: ref.current,
                });
                if (ref.current && !ref.current.contains(e.target as Node)) {
                    handler();
                }
            }

            document.addEventListener("click", handleClick, listenCapturing);

            return () =>
                document.removeEventListener(
                    "click",
                    handleClick,
                    listenCapturing
                );
        },
        [handler, listenCapturing]
    );

    return ref;
}
