#include <stdio.h>

// binary search algorithm to search for an element in a circularly sorted array

int CircularArraySearch(int A[], int n, int x)
{
    int start = 0, end = n - 1;
    while (start <= end)
    {
        int mid = start + (end - start) / 2; // to avoid potential (start + end) overflow
        if (x == A[mid]) return mid; // case 1: found X
        if (A[mid] <= A[end]) // case 2: right half is sorted
        {
            if (x > A[mid] && x <= A[end])
                start = mid + 1; // search in the right sorted half
            else
                end = mid - 1; // search left
        }
        else // case 3: left half is sorted
        {
            if (A[start] <= x && x < A[mid]) // search in the left sorted half
                end = mid - 1;
            else
                start = mid + 1; // search right
        }
    }
    return -1;
}

int main()
{
    int A[] = {12, 14, 18, 21, 3, 6, 8, 9};
    int x;
    printf("Enter a number: ");
    scanf("%d", &x);
    int index = CircularArraySearch(A, 8, x);
    if (index == -1)
        printf("%d not found in the array", x);
    else
        printf("%d was found at index %d", x, index);
}