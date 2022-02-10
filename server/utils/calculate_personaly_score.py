from typing import List


def calculate_score(result: List[str]):
    count_e = 0
    count_i = 0

    for item in result:
        if item == "I":
            count_i += 1
        if item == "E":
            count_e += 1

    if count_e > count_i:
        return "Extrovert"
    else:
        return "Introvert"
