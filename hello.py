
import requests
from bs4 import BeautifulSoup

def decode_secret_message(url):
    response = requests.get(url)
    response.raise_for_status()

    soup = BeautifulSoup(response.text, "html.parser")

    points = []

    # Read the coordinate data from the table
    for row in soup.find_all("tr"):
        cells = row.find_all(["td", "th"])

        if len(cells) != 3:
            continue

        try:
            x = int(cells[0].get_text(strip=True))
            char = cells[1].get_text(strip=True)
            y = int(cells[2].get_text(strip=True))

            points.append((x, char, y))
        except ValueError:
            continue

    if not points:
        return

    # Find the grid dimensions
    max_x = max(point[0] for point in points)
    max_y = max(point[2] for point in points)

    # Create an empty grid
    grid = [
        [" "] * (max_x + 1)
        for _ in range(max_y + 1)
    ]

    # Place each character at its coordinates
    for x, char, y in points:
        grid[y][x] = char

    # Print from top to bottom
    for row in reversed(grid):
        print("".join(row))


url = "https://docs.google.com/document/d/e/2PACX-1vSvM5gDlNvt7npYHhp_XfsJvuntUhq184By5xO_pA4b_gCWeXb6dM6ZxwN8rE6S4ghUsCj2VKR21oEP/pub"

decode_secret_message(url)
