import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

export default function BottomNavigation(active) {
  const navigate = useNavigate();
  return (
    <div>
      <Box>
        <Button onClick={() => navigate("/")}>
          {location.pathname === "/" ? (
            <>
              <HomeIcon fontSize="medium" />
            </>
          ) : (
            <svg
              width="26"
              height="29"
              className="mb-2"
              viewBox="0 0 26 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.75 10.25L13 1.5L24.25 10.25V24C24.25 24.663 23.9866 25.2989 23.5178 25.7678C23.0489 26.2366 22.413 26.5 21.75 26.5H4.25C3.58696 26.5 2.95107 26.2366 2.48223 25.7678C2.01339 25.2989 1.75 24.663 1.75 24V10.25Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.25 26.5V14H16.75V26.5"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </Button>
      </Box>
    </div>
  );
}
