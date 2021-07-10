#include <stdio.h>

// binary search algorithm to find how many times an array has been rotated

int FindRotationCount(int A[], int n)
{
    int start = 0, end = n - 1;
    while (start <= end)
    {
        if (A[start] <= A[end]) return start; // case 1
        int mid = start + (end - start) / 2; // to avoid potential (start + end) overflow
        int next = (mid + 1) % n, prev = (mid + n - 1) % n;
        if (A[mid] <= A[next] && A[mid] <= A[prev]) // case 2
            return mid;
        else if (A[mid] <= A[end]) end = mid - 1; // case 3
        else if (A[mid] >= A[start]) start = mid + 1; // case 4
    }
    return -1;
}

int main()
{
    int A[] = {15, 22, 23, 28, 31, 38, 5, 6, 8, 10, 12};
    int count = FindRotationCount(A, 11);
    printf("The array is rotated %d times", count);
}