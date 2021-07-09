#include <stdio.h>

int BinarySearch(int A[], int n, int x)
{
    int start = 0, end = n - 1;

    while(start <= end)
    {
        int mid = start + (end - start) / 2; // to avoid potential (start + end) overflow
        if (x == A[mid]) return mid; // found X, return (exit)
        else if (x < A[mid]) end = mid - 1; // X lies before mid
        else start = mid + 1; // X lies after mid
    }
    return -1;
}

int main()
{
    int A[] = {2, 4, 5, 7, 13, 14, 15, 23};
    printf("Enter a number: ");
    int x; scanf("%d", &x);
    int index = BinarySearch (A, 8, x);
    if (index != -1) printf("Number %d is at index %d!", x, index);
    else printf("Number %d not found!", x);
}