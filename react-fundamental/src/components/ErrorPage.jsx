import { useRouteError } from "react-router-dom";

function ErrorPage () {
    const error = useRouteError()

    return <div>Maaf, Terjadi Error</div>
}

export default ErrorPage