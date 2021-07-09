#include <stdio.h>

// binary search algorithm to count occurrences of a number in a sorted array with duplicates.

int BinarySearch(int A[], int n, int x, bool searchFirst)
{
    int start = 0, end = n - 1, result = -1;

    while(start <= end)
    {
        int mid = start + (end - start) / 2; // to avoid potential (start + end) overflow
        if (A[mid] == x)
        {
            result = mid;
            if (searchFirst) end = mid - 1; // search towards lower indices
            else start = mid + 1; // search towards higher indices

        }
        else if (x < A[mid]) end = mid - 1;
        else start = mid + 1;
    }
    return result;
}

int main()
{
    int A[] = {1, 1, 3, 3, 5, 5, 5, 5, 5, 9, 9, 11};
    int x;
    printf("Enter a number: ");
    scanf("%d", &x);
    int firstIndex = BinarySearch(A, sizeof(A)/sizeof(A[0]), x, true);
    if (firstIndex == -1)
    {
        printf("Number of occurrences of %d is %d", x, 0);
    }
    else
    {
        int lastIndex = BinarySearch(A, sizeof(A)/sizeof(A[0]), x, false);
        printf("Number of occurrences of %d is %d", x, lastIndex - firstIndex + 1);
    }
}