import { Box, Button } from "@chakra-ui/react"

function Pagination({ total, current, changePage }) {

    let pages = new Array(total).fill(0).map((el, i) => {
        return <Button
            colorScheme={"green"}
            ml={1}
            key={i + 1}
            onClick={() => changePage(i + 1)}
            disabled={current === i + 1}
        >
            {i + 1}
        </Button>
    })

    return <div>{pages}</div>
}

export default Pagination;